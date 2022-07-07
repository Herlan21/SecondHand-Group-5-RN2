import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import DropDownPicker from 'react-native-dropdown-picker';

const DropdownInput = ({ data, setFieldValue, initialData, placeholder, multiple, schema, mode, name, error}) => {

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState(data)
     
    return (
      <DropDownPicker
        style={styles.dropdown}
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        placeholder="Pilih kota"
        searchable={true}
        searchPlaceholder="Cari Kota..."
       
      />
    );
}

export default DropdownInput

const styles = StyleSheet.create({

    dropdown: {
        borderRadius: 6,
        borderWidth: 2,
        justifyContent: 'center',
    }
})