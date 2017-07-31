import * as React from 'react'

export default class ToggleButton extends React.Component<{open: boolean, onClick: () => void}, {}> {
  render () {
    return (
      <div style={{
        zIndex: 2147483000,
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        width: '60px',
        height: '60px',
        borderRadius: '50%',
        transition: 'box-shadow 80ms ease-in-out',
        boxShadow: '0 1px 6px rgba(0, 0, 0, .06), 0 2px 32px rgba(0, 0, 0, .16)',
        cursor: 'pointer',
        background: '#3ead3f'
      }} onClick={this.props.onClick}>
        <div style={{
          backgroundImage: 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcBAMAAACAI8KnAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAIVBMVEUAAAD///////////////////////////////////8AAADPn83rAAAACXRSTlMACq47u/I8r7wWzHxoAAAAAWJLR0QAiAUdSAAAAAlwSFlzAAALEgAACxIB0t1+/AAAAJJJREFUGNNdzzEKhDAQBdAvwtYWW9hbbSdCDrBnWBDS2Sx7A8HSKwgic1tNxj/jmirDC5P/UTSw01V4ri2nMr7xkg/HIAu+Qi6j9HhEcpB1gHFGGCuSTyQTlQ2Vg3ic4x49TVpzwcQXvI+3x/+r0p9eLAfyYhrIWNOSmfZkVlH2Kpm9Z+bJeh68oSYmnlGMnv1X7RZ2SET5id+LAAAAAElFTkSuQmCC)',
          transform: `rotate(${this.props.open ? 0 : -30}deg)`,
          transition: 'transform .16s linear, opacity .08s linear',
          backgroundPosition: '50%',
          backgroundSize: '14px 14px',
          backgroundRepeat: 'no-repeat',
          opacity: this.props.open ? 1 : 0,
          position: 'absolute',
          top: 0,
          bottom: 0,
          width: '100%'
        }}/>
        <div style={{
          transform: `rotate(${this.props.open ? 30 : 0}deg) scale(${this.props.open ? 0 : 1})`,
          transition: 'transform .16s linear, opacity .08s linear',
          opacity: this.props.open ? 0 : 1,
          position: 'absolute',
          top: 0,
          bottom: 0,
          width: '100%',
          padding: (60 - 40) / 2
        }}>
          <svg width="40" height="40" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
            <g fillRule="nonzero" fill="#FFF">
              <path d="M11.46 21.57c2.71-.57 3.942-2.783 4.194-4.662.22-1.645-.258-3.115-1.157-3.575-.635-.326-1.466-.11-2.375.602-.267.62-.564 1.237-.92 1.84-1.026 1.738-2.347 2.85-3.664 3.556-.037.03-.078.058-.126.08-.024.01-.05.02-.076.025-.573.29-1.143.507-1.684.667.822.936 2.563 2.153 5.81 1.468zM21.765 10.55l-.097.062c-.376.238-.602.525-.67.854-.054.272.003.537.077.737.27.025 2.138.172 3.79-.315-.137-.082-.302-.166-.457-.228-.987-.395-1.57-1.128-2.048-1.926-.295.096-.507.553-.56.708l-.035.108zM21.575 13.293l-2.95.803 6.53 2.76 4.228-5.692-3.2.872c-.02.264-.182.605-.805.81-1.313.43-2.832.478-3.803.447z"/>
              <path d="M30.1 11.27l-4.73 6.37-7.307-3.087 1.696 6.226 12.038-3.282"/>
              <path d="M18.87 21.574l-2.054-7.538c-.077-.283.09-.576.375-.654l3.307-.9c-.115-.29-.213-.698-.126-1.137.096-.48.387-.886.864-1.214.094-.23.348-.74.81-.954-.04-.072-.077-.143-.117-.214-.83-1.534-1.555-2.86-4.25-2.668-2.823.2-3.638 2.462-4.668 5.326-.154.426-.31.855-.474 1.285 1.06-.546 1.83-.358 2.252-.142 1.155.59 1.758 2.29 1.5 4.23-.28 2.095-1.66 4.563-4.696 5.203-.695.147-1.33.21-1.906.21-2.642 0-4.085-1.33-4.714-2.13-.67.15-1.274.222-1.76.25 2.2 2.593 5.59 5.01 10.387 4.47 2.512-.283 4.395-1.287 5.594-2.984.016-.022.03-.045.045-.067-.04-.01-.082-.027-.12-.05-.122-.07-.212-.184-.25-.32zM17.58 8.697c.533 0 .964.43.964.962 0 .53-.43.96-.963.96-.53 0-.96-.43-.96-.96 0-.532.43-.963.96-.963z"/>
              <path d="M5.004 15.216l-4.802.435c.35.81 1.063 2.283 2.19 3.828.626.03 2.316.017 4.114-.8-.43-.985-1.18-2.72-1.502-3.462z"/>
            </g>
          </svg>
        </div>
      </div>
    )
  }
}