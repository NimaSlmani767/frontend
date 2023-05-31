import { useApi } from '/@src/composable/useApi'
import { ILosses } from '/@src/interfaces/losses.interface'

const api = useApi()
export async function lossesHandler(body: ILosses): Promise<number> {
  const { status } = await api.post('/fatality', body)
  return status
}
