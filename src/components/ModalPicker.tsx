import React, { memo, ReactText, useEffect, useRef, useState } from 'react'
import ReactNativePickerModule from 'react-native-picker-module'
import { useColors } from '../theme/themeHooks'

type Props = {
  data: Array<{ label: string; value: string }>
  selectedValue: string
  onValueChanged: (itemValue: ReactText, itemIndex: number) => void
  visible: boolean
  handleClose: () => void
  title?: string
}

const ModalPicker = ({
  data: propData,
  selectedValue,
  onValueChanged,
  visible,
  handleClose,
  title,
}: Props) => {
  const { redMain } = useColors()
  const pickerRef = useRef<ReactNativePickerModule>(null)
  const [data, setData] = useState(propData)

  useEffect(() => {
    const selectedItemIndex = data.findIndex(
      ({ value }) => value === selectedValue,
    )
    setData([
      ...data.slice(0, selectedItemIndex),
      ...data.slice(selectedItemIndex + 1),
    ])
  }, [data, selectedValue])

  useEffect(() => {
    if (!visible) return

    pickerRef.current?.show()
  }, [visible])
  return (
    <ReactNativePickerModule
      pickerRef={pickerRef}
      value={selectedValue}
      items={data.map(({ label }) => label)}
      title={title}
      titleStyle={{ height: title ? -16 : undefined }}
      cancelButtonTextStyle={{ color: redMain }}
      onCancel={handleClose}
      onValueChange={(value) => {
        const selectedIdx = data.findIndex(({ label }) => label === value)
        onValueChanged(data[selectedIdx].value, selectedIdx)
        handleClose()
      }}
    />
  )
}

export default memo(ModalPicker)
