import React from 'react'
import {StyleSheet, View, Text, TextInput, TouchableOpacity,} from 'react-native'

var num1, num2, op, res

export default class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      res: '',
      num1: '',
      op: ''
    }

    this.updateInput = this.updateInput.bind(this)
    this.defOp = this.defOp.bind(this)

  }

  updateInput(num){
    let res = this.state.res;

    this.setState({
      res: res + num
    })
  }

  clear = () => {
    this.setState({
      res: '',
      op: '',
      num1: ''
    })
    num1 = null
    num2 = null
    op = null
    res = 0

  }
  changeSign = () => {
    let num = Number(this.state.res)
    num = num * (-1)
    num = num.toString()

    this.setState({
      res: num
    })
  }

  defOp(op){
    this.setState({
      op: op,
      num1: this.state.res
    })

    if(this.state.op == 'raiz'){
      this.setState({
        res: Math.sqrt(Number(this.state.num1)).toString()
      })
    }
    else{
      this.setState({
        res: ''
      })
    }
    
  }

  calculate = () => {
    num1 = Number(this.state.num1)
    num2 = Number(this.state.res)

    switch(this.state.op){
      case '+':
        res = num1 + num2
        break;
      case '-':
        res = num1 - num2
        break;
      case '*':
        res = num1 * num2
        break;
      case '/':
        res = num1 / num2
        break;
      case 'raiz':
        res = Math.sqrt(num1)
        break;
      case 'pow':
        res = Math.pow(num1, num2)
        break;
    }

    res = res.toString()
    this.setState({
      res: res
    })
  }

  render(){
    return(
      <View style={styles.container}>
        <View style={styles.res}>
          <TextInput style={styles.input} editable={false} placeholder='0' value={this.state.res}/>
        </View>
        <View style={styles.buttons}>
          <View style={styles.rows}>
            <TouchableOpacity style={[styles.touch, styles.touchOp]} onPress={this.clear}>
              <Text style={styles.touchTextOp}>C</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.touch, styles.touchOp]} onPress={() => this.defOp('raiz')}>
              <Text style={styles.touchTextOp}>Raiz</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.touch, styles.touchOp]} onPress={() => this.defOp('pow')}>
              <Text style={styles.touchTextOp}>pow</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.touch, styles.touchOp]} onPress={() => this.defOp('/')}>
              <Text style={styles.touchTextOp}>/</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.rows}>
            <TouchableOpacity style={styles.touch} onPress={() => this.updateInput('7')}>
              <Text style={styles.touchTextNum}>7</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.touch} onPress={() => this.updateInput('8')}>
              <Text style={styles.touchTextNum}>8</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.touch} onPress={() => this.updateInput('9')}>
              <Text style={styles.touchTextNum}>9</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.touch, styles.touchOp]} onPress={() => this.defOp('*')}>
              <Text style={styles.touchTextOp}>X</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.rows}>
            <TouchableOpacity style={styles.touch} onPress={() => this.updateInput('4')}>
              <Text style={styles.touchTextNum}>4</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.touch} onPress={() => this.updateInput('5')}>
              <Text style={styles.touchTextNum}>5</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.touch} onPress={() => this.updateInput('6')}>
              <Text style={styles.touchTextNum}>6</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.touch, styles.touchOp]} onPress={() => this.defOp('-')}>
              <Text style={styles.touchTextOp}>-</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.rows}>
            <TouchableOpacity style={styles.touch} onPress={() => this.updateInput('1')}>
              <Text style={styles.touchTextNum}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.touch} onPress={() => this.updateInput('2')}>
              <Text style={styles.touchTextNum}>2</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.touch} onPress={() => this.updateInput('3')}>
              <Text style={styles.touchTextNum}>3</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.touch, styles.touchOp]} onPress={() => this.defOp('+')}>
              <Text style={styles.touchTextOp}>+</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.rows}>
            <TouchableOpacity style={styles.touch} onPress={this.changeSign}>
              <Text style={styles.touchTextNum}>-/+</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.touch} onPress={() => this.updateInput('0')}>
              <Text style={styles.touchTextNum}>0</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.touch} onPress={() => this.updateInput('.')}>
              <Text style={styles.touchTextNum}>•</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.touch, styles.touchOp]} onPress={this.calculate}>
              <Text style={styles.touchTextOp}>=</Text>
            </TouchableOpacity>
          </View>
          
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 4,
    backgroundColor: 'white'
  },
  res: {
    height: '15%'
  },
  input: { 
    borderWidth: 2,
    borderColor: 'rgb(255, 128, 0)',
    borderRadius: 12,
    width: '100%',
    fontSize: 34,
    color: 'black'
  },
  touch: {
    flex: 1,
    backgroundColor: 'white',
    //height: '20%',
    width: '25%',
    margin: 3,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    borderWidth: 3,
    borderColor: 'rgb(255, 128, 0)'
  },
  touchOp: {
    backgroundColor: 'rgb(255, 128, 0)'
  },
  rows: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  buttons: {
    flex: 1,
    height: '85%',
    justifyContent: 'center'
    //backgroundColor: 'green'
  },
  touchTextNum: {
    fontSize: 30,
    color: 'rgb(255, 128,0)'  
  },
  touchTextOp: {
    fontSize: 30,
    color: 'white'
  }
})