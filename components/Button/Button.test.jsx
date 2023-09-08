import Button from "./Button"
import React from "react";
import renderer from 'react-test-renderer';
describe('Button', () => {
    test('Render correctly', () => {
        const component = renderer.create(
            <Button>sample Button</Button>
        )
        const tree = component.toJSON()
        expect(tree).toMatchSnapshot()
    })
})