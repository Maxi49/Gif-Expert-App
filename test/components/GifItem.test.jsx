import { render,screen } from "@testing-library/react"
import { GifItem } from "../../src/components"


describe('Test for GifItems', () => { 
    const title = 'Hola';
    const url = 'https://hola.com/hola.jpg'

    test('should match with the snapshot', () => { 
        const { conatiner } = render( <GifItem title={title} url={url} /> )
        expect( conatiner ).toMatchSnapshot()
    })

    test('should show the image with the indicated url',() => {
        render( <GifItem title={title} url={{url: url}}/> )
        const { src,alt } = screen.getByRole('img');

        expect(src).toBe(url);
        expect(alt).toBe(title)
            
    })

    test('should show the title in the component', () => { 

        render( <GifItem title={title} url={{url: url}}/> )

        expect( screen.getByText(title) ).toBeTruthy();
    })
})