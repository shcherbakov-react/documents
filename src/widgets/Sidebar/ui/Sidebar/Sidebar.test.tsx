import '@testing-library/jest-dom'
import {render, screen} from '@testing-library/react'
import {Sidebar} from "../Sidebar/Sidebar";


test('sidebar should work', () => {
     render(<Sidebar/>)
})
