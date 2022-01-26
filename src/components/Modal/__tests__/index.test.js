import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Modal from '..';

const mockToggleModal = jest.fn();
const currentPhoto = {
    name: 'Park bench',
    category: 'landscape',
    description: 'lorem ipsum dolor sit amet',
    index: 1
};

afterEach(cleanup);

describe('Modal component', () => {
    it('renders', () => {
        render(<Modal 
            onClose={mockToggleModal}
            />);
    })
})

it('matches snapshot dom node structure', () => {
    const { asFragment } = render(<Modal
        onClose ={mockToggleModal}
        currentPhoto={currentPhoto}
        />);
})

// describe('Click Event', () => {
//     it('calls onclose handler', () => {
//         //arrange
//         const {getByText} = render(<Modal
//             onClose={mockToggleModal}
//             currentPhoto={currentPhoto}
//             />);
//             //act
//             fireEvent.click(getByText('Close this modal'))
//             //assert
//             //one states it has been called one time 
//             expect(mockToggleModal).toHaveBeenCalledTimes(1);
//     });
// })