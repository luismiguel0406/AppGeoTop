import { useCallback, useMemo, useState } from 'react'
import { Rectangle, useMap, useMapEvent } from 'react-leaflet'
import { useEventHandlers } from '../../hooks/useEventHandlers'

const Minimapbounds = ({parentMap, zoom}) => {
    const minimap = useMap()

  const onClick = useCallback(
    (e) => {
      parentMap?.setView(e.latlng, parentMap?.getZoom())
    },
    [parentMap],
  )
  useMapEvent('click', onClick)

  const [bounds, setBounds] = useState(parentMap.getBounds())
  const onChange = useCallback(() => {
    setBounds(parentMap.getBounds())
    minimap.setView(parentMap.getCenter(), zoom)
  }, [minimap, parentMap, zoom])


  const handlers = useMemo(() => ({ move: onChange, zoom: onChange }), [])
  useEventHandlers({ instance: parentMap }, handlers)

  return <Rectangle bounds={bounds} pathOptions={{weight:1}} />
}

export default Minimapbounds;