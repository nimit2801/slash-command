import requests
import json
url = "https://discord.com/api/v8/applications/797155989359034379/guilds/691933277023502338/commands"
# 691933277023502338

json = {
    "name": "blop",
    "description": "Send a random adorable animal photo",
    "options": [
        {
            "name": "animal",
            "description": "The type of animal",
            "type": 3,
            "required": True,
            "choices": [
                {
                    "name": "Dog",
                    "value": "animal_dog"
                },
                {
                    "name": "Cat",
                    "value": "animal_cat"
                },
                {
                    "name": "Penguin",
                    "value": "animal_penguin"
                }
            ]
        },
        {
            "name": "only_smol",
            "description": "Whether to show only baby animals",
            "type": 5,
            "required": False
        }
    ]
}



# For authorization, you can use either your bot token
headers = {
    "Authorization": "Bot Nzk3MTU1OTg5MzU5MDM0Mzc5.X_iXXg.TDJ_K9NaM-ZcJIbJE_6l5F6Nrss",
    "Content-Type": "application/json"
}

# or a client credentials token for your app with the applications.commands.update scope
# headers = {
#     "Authorization": "Bearer abcdefg"
# }

def prettyJson(rp4):

    json_formatted_str = json.dumps(rp4, indent=4)
    print(json_formatted_str)



# POST /webhooks/<application_id>/<interaction_token>
url3 = "https://discord.com/api/v8/webhooks/797155989359034379/aW50ZXJhY3Rpb246ODQ0NDY2NTc1OTQ2OTQwNDU2OjNpdlQ3dXRaQk5ubWduVmFRTkhIbG5BOW5SN3RYS1R6Z1JJRFR1eWt2S2NxZjFpQXI1NmgwcGxOcms2Mm9uaVdxYjJBVHROVkZsRUZvOGppZ1hjNlRQbzE3VDB2cmFLQTR2MjJ3Z3hvTEtTYkdhOVF4Z0NSUVpsUTE2NWFhWGlM/messages/@original"
# rp = requests.delete(url3, json=json2)
# print(rp)

# url4 = "https://discord.com/api/v8/users/637564801832452097"

def loop(rp4):
    print(rp4.keys())
    a = list(rp4.keys())
    for x in a:
        print(f'{x}: {rp4[x]}')

# rp3 = requests.get(url3)
# # print(rp3)
json2 = {
    "content": "Congrats on sending your command!"
}
rp4 = requests.patch(url3, headers=headers, json=json2);
# print(rp4.json())
print(rp4.content)
loop(rp4.json())
# prettyJson(rp4)
# print(rp4.json())
# r = requests.post(url, headers=headers, json=json)

