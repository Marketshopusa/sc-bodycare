import urllib.request
import json

print("Starting automated security updates verification...")

# 1. Check if index.html references the security script
try:
    with urllib.request.urlopen("http://localhost:3000/index.html") as response:
        html = response.read().decode('utf-8')
        if 'security-shield.js' in html:
            print("[PASS] index.html references security-shield.js")
        else:
            print("[FAIL] index.html DOES NOT reference security-shield.js")
except Exception as e:
    print("[FAIL] Could not fetch index.html:", e)

# 2. Test XSS sanitization in contact form submission
contact_data = {
    "name": "<script>alert('name_xss')</script>",
    "email": "hacker@test.com",
    "message": "Hello <img src=x onerror=alert('msg_xss')> and this is safe."
}
data_bytes = json.dumps(contact_data).encode('utf-8')

req = urllib.request.Request(
    "http://localhost:3000/api/contact",
    data=data_bytes,
    headers={'Content-Type': 'application/json'}
)

try:
    with urllib.request.urlopen(req) as response:
        res_json = json.loads(response.read().decode('utf-8'))
        print("[PASS] Contact submission returned code 200:", res_json)
except Exception as e:
    print("[FAIL] Contact submission failed:", e)

# 3. Retrieve logs from admin emails endpoint and check for escaped characters
try:
    with urllib.request.urlopen("http://localhost:3000/api/admin/emails") as response:
        emails = json.loads(response.read().decode('utf-8'))
        support_email = next((e for e in emails if e['id'].startswith('support-')), None)
        if support_email:
            print("[PASS] Found support email log in database")
            body = support_email['body']
            
            # The HTML tag should be escaped as &lt;script&gt; and &lt;img
            # There should not be raw '<script' or '<img' in the message text itself
            message_part = body.split('<strong>Mensaje / Consulta:</strong>')[1]
            
            if '<script' in message_part or '<img' in message_part:
                print("[FAIL] Message part contains unescaped HTML tags! XSS vulnerability present.")
            elif '&lt;script' in body and '&lt;img' in body:
                print("[PASS] HTML tags are correctly escaped to &lt;script and &lt;img")
            else:
                print("[WARN] Did not find escaped representations in body:", body)
        else:
            print("[FAIL] No support email log found in admin history")
except Exception as e:
    print("[FAIL] Could not retrieve admin email logs:", e)

print("Verification complete.")
