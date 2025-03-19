# Vytvoření potřebných adresářů
New-Item -ItemType Directory -Force -Path "public\images\hero"
New-Item -ItemType Directory -Force -Path "public\images\products"

# Kopírování hero obrázků
Copy-Item "C:\Users\Administrator\CascadeProjects\Aktual\RTI\inputdata\Images\hero\rti_carport.jpg" -Destination "public\images\hero\"
Copy-Item "C:\Users\Administrator\CascadeProjects\Aktual\RTI\inputdata\Images\rti_cleaning_laser.jpg" -Destination "public\images\hero\"
Copy-Item "C:\Users\Administrator\CascadeProjects\Aktual\RTI\inputdata\Images\rti_welding_laser.jpg" -Destination "public\images\hero\"
Copy-Item "C:\Users\Administrator\CascadeProjects\Aktual\RTI\inputdata\Images\rti_welding.jpg" -Destination "public\images\hero\"
Copy-Item "C:\Users\Administrator\CascadeProjects\Aktual\RTI\inputdata\Images\rti_grinding.jpg" -Destination "public\images\hero\"

Write-Host "Kopírování obrázků dokončeno"
