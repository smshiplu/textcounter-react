export async function login(authValue) {
  const reQuestOptions = {
    method: "POST",
    headers: {"Content-type": "application/json"},
    body: JSON.stringify(authValue)
  }
  const response = await fetch(`${process.env.REACT_APP_HOST}/login`, reQuestOptions);
  if(!response.ok) {
    throw{message: response.statusText, status: response.status} //eslint-disable-line
  }
  const data = await response.json();
  if(data.accessToken) {
    sessionStorage.setItem("token", JSON.stringify(data.accessToken));
    sessionStorage.setItem("tcid", JSON.stringify(data.user.id));
  }
  return data;
}

export async function register(authValue) {
  const reQuestOptions = {
    method: "POST",
    headers: {"Content-type": "application/json"},
    body: JSON.stringify(authValue)
  }
  const response = await fetch(`${process.env.REACT_APP_HOST}/register`, reQuestOptions);
  if(!response.ok) {
    throw{message: response.statusText, status: response.status} //eslint-disable-line
  }
  const data = await response.json();
  return data;
}

export function logout() {
  sessionStorage.removeItem("token");
  sessionStorage.removeItem("tcid");
}