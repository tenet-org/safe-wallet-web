/**
 * A static shortName<->chainId dictionary
 * E.g.:
 *
 * {
 *   eth: '1',
 *   gor: '5',
 *   ...
 * }
 */
type Chains = Record<string, string>

interface NetworkShortName {
  shortName: string
  chainId: number
}

const networks: NetworkShortName[] = [
  { shortName: 'tenetDev', chainId: 155 },
  { shortName: 'tenetTest', chainId: 155 },
]

const chains = networks.reduce<Chains>((result, { shortName, chainId }) => {
  result[shortName] = chainId.toString()
  return result
}, {})

export default chains
