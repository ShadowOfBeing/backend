import requests

response = requests.get('http://127.0.01/api/departments')
json_data = response.json()