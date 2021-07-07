export function postRequest(endpoint: string, payload: any) {
  let url: string = `${process.env.REACT_APP_API_HOST}${endpoint}`

  return fetch(url, {
    method: 'POST',
    mode: 'cors',
    credentials: 'include',
    headers: { 'Content-Type': 'Application/json', },
    body: JSON.stringify(payload)
  }).then(res => res.json())
}
