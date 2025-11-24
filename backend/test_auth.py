import requests

BASE_URL = 'http://127.0.0.1:8000/api'

def test_auth():
    # 1. Register
    print("Testing Registration...")
    reg_data = {
        'username': 'testuser_auth',
        'password': 'testpassword123',
        'email': 'test@example.com',
        'role': 'STUDENT'
    }
    try:
        r = requests.post(f'{BASE_URL}/users/register/', json=reg_data)
        if r.status_code == 201:
            print("Registration Successful")
        elif r.status_code == 400 and 'username' in r.json() and 'already exists' in str(r.json()):
             print("User already exists, proceeding to login.")
        else:
            print(f"Registration Failed: {r.status_code} {r.text}")
            return
    except Exception as e:
        print(f"Connection failed: {e}")
        return

    # 2. Login
    print("\nTesting Login...")
    login_data = {
        'username': 'testuser_auth',
        'password': 'testpassword123'
    }
    r = requests.post(f'{BASE_URL}/token/', json=login_data)
    if r.status_code == 200:
        tokens = r.json()
        print("Login Successful")
        print(f"Access Token: {tokens['access'][:20]}...")
        print(f"Refresh Token: {tokens['refresh'][:20]}...")
    else:
        print(f"Login Failed: {r.status_code} {r.text}")

if __name__ == '__main__':
    test_auth()
