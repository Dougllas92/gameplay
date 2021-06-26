export type GuildProps = {
  id: string
  name: string
  icon: string | null
  owner: boolean
}

export type Appointmentprops = {
  id: string
  guild: GuildProps
  category: string
  date: string
  description: string
}

export type MemberProps = {
  id: string
  username: string
  avatar_url: string
  status: string
}
