import React from 'react'
import { screen, render } from '@testing-library/react'
import { act } from 'react-test-renderer'
import '@testing-library/jest-dom/extend-expect';

import Navbar from '../components/Navbar/Navbar'
import Loading from '../components/Loading/Loading';

describe("render navbar", () => {
    
    test("should say Pikadex", () => {

        render(<Navbar searchTerm={''} setSearchTerm={function (value: React.SetStateAction<string>): void {
            throw new Error('Function not implemented.');
        } } tags={undefined} setTags={function (value: React.SetStateAction<string[][]>): void {
            throw new Error('Function not implemented.');
        } } filterSearch={false} setFilterSearch={function (value: React.SetStateAction<boolean>): void {
            throw new Error('Function not implemented.');
        } } surpriseMe={false} setSurpriseMe={function (value: React.SetStateAction<boolean>): void {
            throw new Error('Function not implemented.');
        } } init={false} setInit={function (value: React.SetStateAction<boolean>): void {
            throw new Error('Function not implemented.');
        } } />);
        
        const pikadex = screen.getByText("Pikadex")
        expect(pikadex).toBeInTheDocument()

    })

    test("should say Surprise me!", () => {

        render(<Navbar searchTerm={''} setSearchTerm={function (value: React.SetStateAction<string>): void {
            throw new Error('Function not implemented.');
        } } tags={undefined} setTags={function (value: React.SetStateAction<string[][]>): void {
            throw new Error('Function not implemented.');
        } } filterSearch={false} setFilterSearch={function (value: React.SetStateAction<boolean>): void {
            throw new Error('Function not implemented.');
        } } surpriseMe={false} setSurpriseMe={function (value: React.SetStateAction<boolean>): void {
            throw new Error('Function not implemented.');
        } } init={false} setInit={function (value: React.SetStateAction<boolean>): void {
            throw new Error('Function not implemented.');
        } } />);
            
        const search = screen.getByText("Surprise me!")
        expect(search).toBeInTheDocument()
    })
})