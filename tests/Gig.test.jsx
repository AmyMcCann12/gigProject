import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import '@testing-library/jest-dom';
import Gig from "../src/components/Gig"
import abbaImage from "./assets/abba.jpeg";

const gig = {
    band: 'ABBA',
    image: abbaImage,
    description: "Let's have a great time!",
    date: '7pm - Friday 23rd February 2024',
    location: 'Birmingham'
}

test("renders with the correct gig information", () => {
    render(<Gig band = {gig.band}
    image = {gig.image}
    description = {gig.description}
    date = {gig.date}
    location = {gig.location}/>)
    expect(screen.getByRole('heading')).toHaveTextContent('ABBA')
    expect(screen.getByRole('img')).toHaveAttribute('src', abbaImage)
    expect(screen.getByText("Let's have a great time!"))
    expect(screen.getByText('7pm - Friday 23rd February 2024'))
    expect(screen.getByText("Birmingham"))
})

test("renders with favourite set to no", () => {
    render(<Gig band = {gig.band}
    image = {gig.image}
    description = {gig.description}
    date = {gig.date}
    location = {gig.location}/>)
    expect(screen.getByText("Favourite: No"))
})

test("renders with favourite set to correct status when button has been clicked once", async() => {
    render(<Gig band = {gig.band}
    image = {gig.image}
    description = {gig.description}
    date = {gig.date}
    location = {gig.location}/>)
    await userEvent.click(screen.getByText("Click Button to adjust Favourite"))
    expect(screen.getByText('Favourite: Yes'))
})

test("renders with favourite set when button toggled", async() => {
    render(<Gig band = {gig.band}
    image = {gig.image}
    description = {gig.description}
    date = {gig.date}
    location = {gig.location}/>)
    await userEvent.click(screen.getByText("Click Button to adjust Favourite"))
    await userEvent.click(screen.getByText("Click Button to adjust Favourite"))
    await userEvent.click(screen.getByText("Click Button to adjust Favourite"))
    await userEvent.click(screen.getByText("Click Button to adjust Favourite"))
    expect(screen.getByText('Favourite: No'))
})

