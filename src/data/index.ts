interface CalculatorButtonsInterface {
    size: 'normal' | 'large'
    color: string
    label: string
    value: string
}

export default function CalculatorButtons(): CalculatorButtonsInterface[] {
    return [
        {
            size: 'normal',
            color: '#3ec6ff',
            label: '%',
            value: 'percent'
        },
        {
            size: 'normal',
            color: '#3ec6ff',
            label: '⅟×',
            value: '1dividedby'
        },
        {
            size: 'normal',
            color: '#ffffff',
            label: 'AC',
            value: 'clear'
        },
        {
            size: 'normal',
            color: '#ff5337',
            label: '«',
            value: 'undo'
        },
        {
            size: 'normal',
            color: '#3ec6ff',
            label: 'x²',
            value: 'pow'
        },
        {
            size: 'normal',
            color: '#3ec6ff',
            label: '√',
            value: 'sqrt'
        },
        {
            size: 'normal',
            color: '#3ec6ff',
            label: '÷',
            value: 'divide'
        },
        {
            size: 'normal',
            color: '#3ec6ff',
            label: '×',
            value: 'multiply'
        },
        {
            size: 'normal',
            color: '#ffd04b',
            label: '7',
            value: 'num7'
        },
        {
            size: 'normal',
            color: '#ffd04b',
            label: '8',
            value: 'num8'
        },
        {
            size: 'normal',
            color: '#ffd04b',
            label: '9',
            value: 'num9'
        },
        {
            size: 'normal',
            color: '#3ec6ff',
            label: '-',
            value: 'sub'
        },
        {
            size: 'normal',
            color: '#ffd04b',
            label: '4',
            value: 'num4'
        },
        {
            size: 'normal',
            color: '#ffd04b',
            label: '5',
            value: 'num5'
        },
        {
            size: 'normal',
            color: '#ffd04b',
            label: '6',
            value: 'num6'
        },
        {
            size: 'normal',
            color: '#3ec6ff',
            label: '+',
            value: 'plus'
        },
        {
            size: 'normal',
            color: '#ffd04b',
            label: '1',
            value: 'num1'
        },
        {
            size: 'normal',
            color: '#ffd04b',
            label: '2',
            value: 'num2'
        },
        {
            size: 'normal',
            color: '#ffd04b',
            label: '3',
            value: 'num3'
        },
        {
            size: 'normal',
            color: '#3ec6ff',
            label: '±',
            value: 'plusminus'
        },
        {
            size: 'normal',
            color: '#ffd04b',
            label: '0',
            value: 'num0'
        },
        {
            size: 'normal',
            color: '#ffd04b',
            label: '.',
            value: 'dot'
        },
        {
            size: 'large',
            color: '#1bc95a',
            label: '=',
            value: 'equal'
        },

    ]
}