import { GoogleGenerativeAI } from '@google/generative-ai';

// Inicializace Gemini API s vaším API klíčem
const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY || '');

// Konfigurace modelu
const modelConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 2048,
};

// Počáteční konverzace pro nastavení chování chatbota
const initialPrompt = `
Jsi AI asistent pro web robotech-innovation.cz. Řiď se těmito STRIKTNÍMI pravidly:

1. NIKDY si nevymýšlej žádné informace, které nejsou přímo uvedené na webu
2. NIKDY neuváděj konkrétní telefonní čísla, emaily nebo kontakty, pokud nejsou přímo na webu
3. Pokud neznáš odpověď, řekni: "Omlouvám se, ale tuto informaci nemohu potvrdit. Doporučuji kontaktovat naši společnost přímo přes kontaktní formulář na webu."
4. Při dotazu na ceny nebo specifické parametry, které nejsou uvedené, řekni: "Pro přesnou cenovou nabídku a technické specifikace prosím využijte náš kontaktní formulář."
5. Odpovídej POUZE na základě informací, které jsou dostupné na webu
6. Komunikuj vždy v češtině
7. Buď profesionální, ale přátelský

Tvé hlavní úkoly jsou:
1. Pomáhat návštěvníkům orientovat se v našich produktech a službách
2. Odpovídat na základní otázky o společnosti
3. Směrovat zákazníky na kontaktní formulář pro specifické dotazy
4. NIKDY nevymýšlet informace nebo kontakty

Začni konverzaci stručným představením a nabídnutím pomoci.
`;

let model: any = null;
let chat: any = null;

async function initializeModel() {
  if (!process.env.NEXT_PUBLIC_GEMINI_API_KEY) {
    throw new Error('API klíč není nastaven. Prosím nastavte NEXT_PUBLIC_GEMINI_API_KEY v .env souboru.');
  }

  try {
    if (!model) {
      model = genAI.getGenerativeModel({ 
        model: 'gemini-pro',
        generationConfig: modelConfig 
      });
    }
    
    // Vždy vytvořit nový chat při inicializaci
    chat = model.startChat({
      history: [],
      generationConfig: modelConfig,
    });

    const result = await chat.sendMessage(initialPrompt);
    const response = await result.response;
    console.log('Initial response:', response); // Pro debugování
    return response.text();
  } catch (error) {
    console.error('Chyba při inicializaci modelu:', error);
    throw new Error('Nepodařilo se inicializovat chatbot. Zkontrolujte API klíč a připojení.');
  }
}

export async function getChatResponse(message: string): Promise<string> {
  try {
    // Pokud model nebo chat není inicializován, inicializuj je
    if (!model || !chat) {
      console.log('Initializing model...'); // Pro debugování
      return await initializeModel();
    }

    console.log('Sending message:', message); // Pro debugování
    const result = await chat.sendMessage(message);
    const response = await result.response;
    console.log('Response received:', response); // Pro debugování
    return response.text();
  } catch (error: any) {
    console.error('Chyba při komunikaci s Gemini API:', error);
    
    // Pokud je chyba související s API klíčem, vrať specifickou zprávu
    if (error.message?.includes('API key')) {
      throw new Error('Chyba API klíče. Prosím zkontrolujte nastavení.');
    }
    
    // Zkus reinicializovat chat při chybě
    try {
      console.log('Attempting to reinitialize chat...'); // Pro debugování
      return await initializeModel();
    } catch (reinitError) {
      console.error('Reinicializace selhala:', reinitError);
      throw new Error('Omlouváme se, ale došlo k chybě při zpracování vaší zprávy. Zkuste to prosím později.');
    }
  }
}
