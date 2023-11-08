export async function getUser() {
  const token = JSON.parse(sessionStorage.getItem("token"));
  const tcid = JSON.parse(sessionStorage.getItem("tcid"));

  if(token) {
    const reQuestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      }
    }
  
    const response = await fetch(`${process.env.REACT_APP_HOST}/600/users/${tcid}`, reQuestOptions);
    if(!response.ok) {
      throw {message: response.statusText, status: response.status} //eslint-disable-line
    }
  
    const data = await response.json();
    return data;
  } else {
    throw {message: "User can not be extracted! due to Token Expiration."} //eslint-disable-line
  }
}

export async function saveCount(dataToSave) {
  const token = JSON.parse(sessionStorage.getItem("token"));
  if(token) {
    const reQuestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(dataToSave)
    }
    const response = await fetch(`${process.env.REACT_APP_HOST}/660/counts/`, reQuestOptions);
  
    if(!response.ok) {
      throw{message: response.statusText, status: response.status} //eslint-disable-line
    }
    const data = await response.json();
    return data;
    
  } else {
    throw {message: "Save can not be done! due to Token Expiration."} //eslint-disable-line
  }
}

export async function getUserCounts() {
  const token = JSON.parse(sessionStorage.getItem("token"));
  const tcid = JSON.parse(sessionStorage.getItem("tcid"));

  if(token) {
    const reQuestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      }
    }
    const response = await fetch(`${process.env.REACT_APP_HOST}/660/counts?user.id=${tcid}`, reQuestOptions);

    if(!response.ok) {
      throw {message: response.statusText, status: response.status} //eslint-disable-line
    }
    const data = await response.json();
    return data;
  } else {
    throw {message: "Items can not be extracted! due to Token Expiration."} //eslint-disable-line
  }
}

export async function getCount(id) {

  const token = JSON.parse(sessionStorage.getItem("token"));

  if(token) {
    const reQuestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      }
    }
    const response = await fetch(`${process.env.REACT_APP_HOST}/660/counts/${id}`, reQuestOptions);
    if(!response.ok) {
      throw {message: response.statusText, status: response.status} //eslint-disable-line
    }
    const data = await response.json();
    return data;
  } else {
    throw {message: "Item can not be extracted! due to Token Expiration."} //eslint-disable-line
  }
}

export async function updateCount(id, dataToUpdate) {
  const token = JSON.parse(sessionStorage.getItem("token"));

  if(token) {
    const reQuestOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(dataToUpdate)
    }

    const response = await fetch(`${process.env.REACT_APP_HOST}/660/counts/${id}`, reQuestOptions);
  
    if(!response.ok) {
      throw{message: response.statusText, status: response.status} //eslint-disable-line
    }
  
    const data = await response.json();
    return data;
  } else {
    throw {message: "Update can not be done! due to Token Expiration."} //eslint-disable-line
  }
}

export async function deleteCount(id) {
  const token = JSON.parse(sessionStorage.getItem("token"));
  const tcid = JSON.parse(sessionStorage.getItem("tcid"));

  if(token) {
    const reQuestOptions = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      }
    }
    const response = await fetch(`${process.env.REACT_APP_HOST}/660/counts/${id}?user.id=${tcid}`, reQuestOptions);
  
    if(!response.ok) {
      throw {message: response.statusText, status: response.status} //eslint-disable-line
    }
    
    const data = await response.json();
    return data;
  } else {
    throw {message: "Delete can not be done! due to Token Expiration."} //eslint-disable-line
  }
  
}