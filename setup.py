print("******************************************************************************************")
print("To run your own discord bot, Please Find CLIENT ID and Token from Discord Developer Portal")
print("1. Go to DISCORD DEVELOPER PORTAL https://discord.com/developers/applications")
print("2. In your applications, Select the application.")
print("3. In your application, Select OAuth2 from sidebar and select General.")
print("4. Copy the Client Code")
print("")
clientid=input("Enter the Client ID: ")
print("5. Click on Reset Secret, Complete 2Factor AUTH and copy Client Secret: ")
print()
token=input("Enter the Client Secret: ")
filename='.env'
s1="CLIENT_ID='"+clientid+"'"
s2="TOKEN='"+token+"'"
with open(filename, 'w', encoding='utf-8') as f:
    f.write(s1)
    f.write('\n')
    f.write(s2)