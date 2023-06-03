# Auto Catch BDS Version

This action catch BDS Version from Link

## Inputs

### `url`

**Required** The url of the latest bds. Default `https://minecraft.azureedge.net/bin-win/bedrock-server-1.19.81.01.zip`.

## Outputs

### `BDS_VERSION`

The version of latest bds.

## Example usage

```yaml
uses: HuoHuas001/Auto-Catch-BDS-Version@v1
with: 
    url: 'https://minecraft.azureedge.net/bin-win/bedrock-server-1.19.81.01.zip'
```