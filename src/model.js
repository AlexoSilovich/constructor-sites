import image from './assets/image.png'
import { TitleBlock, TextBlock, ColumnsBlock, ImageBlock } from './classes/block'

const text = `here we go with some text`

export const model = [
  new TitleBlock('Constructor by A.S.', {
    tag: 'h2',
    styles: {
      background: 'linear-gradient(to right, #ff0099, #493240)',
      color: '#fff',
      padding: '1.5rem',
      'text-align': 'center',
    }
  }),
  new ImageBlock(image, {
    styles: {
      padding: '2rem 0',
      display: 'flex',
      'justify-content': 'center',
    },
    imageStyles: {
      width: '500px',
      height: 'auto'
    },
    alt: 'image'
  }),
  new TextBlock(text, {
    styles: {
      background: 'red',
      padding: '1rem',
      'font-weight': 'bold'
    }
  }),
  new ColumnsBlock([
    'constructor on ',
    'javascript',
    'ease',
  ], {
    styles: {
      background: 'blue',
      padding: '2rem',
      color: '#fff',
      'font-weight': 'bold'
    }
  }),
]