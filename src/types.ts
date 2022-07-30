export interface Team {
  id: number,
  name: string,
  image: string,
  description: string,
  created_at: string,
  is_archived: boolean
}

export interface User {
  id: number,
  name: string,
  avatar: string,
}

export interface Activity {
  "id": number
  "person": User,
  "action": string,
  "target": string,
  "created_at": string
}


