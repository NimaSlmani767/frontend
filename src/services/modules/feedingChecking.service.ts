import { useApi } from '/@src/composable/useApi'
import { IFeedingChecking } from '/@src/interfaces/feedingChecking.interface'

const api = useApi()
export async function feedingCheckingHandler(body: IFeedingChecking): Promise<number> {
  const { status } = await api.post('/feeding', body)
  return status
}
