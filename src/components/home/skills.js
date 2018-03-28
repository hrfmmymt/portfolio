import { h, Component } from 'preact'
import styles from './skills.css'
import { ResponsiveContainer, Treemap } from 'Recharts'

const COLORS = ['#8889DD', '#9597E4', '#8DC77B', '#A5D297', '#E2CF45', '#F8C12D', '#8889DD', '#9597E4', '#8DC77B', '#A5D297', '#E2CF45', '#F8C12D']

class CustomizedContent extends Component {
  render() {
    const { root, depth, x, y, width, height, index, payload, colors, rank, label } = this.props

    return (
      <g>
        <rect
          x={x}
          y={y}
          width={width}
          height={height}
          style={{
            fill: depth < 2 ? colors[Math.floor(index / root.children.length * 6)] : 'none',
            stroke: '#fff',
            strokeWidth: 2 / (depth + 1e-10),
            strokeOpacity: 1 / (depth + 1e-10),
          }}
        />
        {
          depth === 1 ?
          <text
            x={x + width / 2}
            y={y + height / 2 + 7}
            textAnchor="middle"
            fill="#fff"
          >
            { label }
          </text>
          : null
        }
      </g>
    );
  }
}

class SkillChart extends Component {
  handleClick(e) {
    console.log(e);
  }

  render(list) {
    const data = list.item

    return (
      <ResponsiveContainer width="100%" aspect={2}>
        <Treemap
          className={styles.chart}
          width={480}
          height={400}
          data={data}
          dataKey="value"
          stroke="#fff"
          content={<CustomizedContent colors={COLORS} />}
          onClick={this.handleClick}
        />
      </ResponsiveContainer>
    );
  }
}

export default class Skills extends Component {
  render(props) {
    return (
      <section className={styles.wrapper}>
        <h2>{props.title}</h2>
      </section>
    )
  }
}
