import MyComponent from '../../../../slices/HeroBanner'

export default {
  title: 'slices/HeroBanner',
}

export const _Default = () => (
  <MyComponent
    slice={{
      variation: 'default',
      name: 'Default',
      slice_type: 'hero_banner',
      items: [
        { features: 'reintermediate clicks-and-mortar infrastructures' },
        { features: 'leverage value-added e-services' },
        { features: 'brand 24/365 paradigms' },
      ],
      primary: {
        title: [
          {
            type: 'heading2',
            text: 'Reinvent end-to-end platforms',
            spans: [],
          },
        ],
        body: [
          {
            type: 'paragraph',
            text: 'Adipisicing incididunt sint do do esse est laboris proident. Deserunt aute qui duis sit in laborum esse reprehenderit officia consectetur. Nisi est enim quis esse nisi non.',
            spans: [],
          },
        ],
        buttonText: 'Start free trial today',
      },
      id: '_Default',
    }}
  />
)
_Default.storyName = 'Default'
