import React,{Component} from 'react';
import PropTypes from 'prop-types'
import config from './config';
import warning from './warning'
export default class VerifyCode extends Component {
    state={
        code:''
    }

    static version = '0.0.1';

    /*
    * @params:width 宽
    * @params:height 高
    * @params:type 图形验证码默认类型blend:数字字母混合类型、number:纯数字、letter:纯字母
    * @params:onChange=( value ) =>{} 验证码改变时回调
    * @params:len 生成的验证码长度
    * @params:ref 组件的ref字符串
    * */
    static PropTypes = {
        width: PropTypes.number,
        height: PropTypes.number,
        type: PropTypes.oneOf(['blend', 'number','letter']),
        numbers:PropTypes.array,
        letters:PropTypes.array,
        onChange:PropTypes.func,
        len:PropTypes.number,
        ref:PropTypes.string,
    }
    static defaultProps ={
        width:config.width,
		height:config.height,
        numbers:config.numbers,
        letters:config.letters,
        type:'blend',
        len:4,
        ref:'react_verify_code',
        onChange:()=>false
    }

    randomNum = (min,max) => Math.floor(Math.random() * (max - min) + min)
    randomColor = (min, max) => `rgb(${this.randomNum(min, max)},${this.randomNum(min, max)},${this.randomNum(min, max)})`

    componentDidMount(){
        this.draw()
    }

    render(){
        const props = this.props;
        return(
            <canvas ref={props.ref}
                    onClick={this.draw.bind(this)}
                    style={{
                        userSelect:'none'
                    }}

                    height={props.height}
                    width={props.width}>
            </canvas>
        )
    }

    draw(){
        const {width,height,numbers,type,len,ref,onChange,letters} = this.props;
        const canvas = this.refs[ref];
        const randomNum = this.randomNum,
            randomColor = this.randomColor;


        let ctx;
        if(canvas.getContext){
            ctx = canvas.getContext('2d');

            //for run test
            if(!ctx){
                ctx={};
                ctx.fillStyle=()=>false;
                ctx.fillRect=()=>false;
                ctx.translate=()=>false;
                ctx.rotate=()=>false;
                ctx.fillText=()=>false;
                ctx.beginPath=()=>false;
                ctx.moveTo=()=>false;
                ctx.lineTo=()=>false;
                ctx.stroke=()=>false;
                ctx.arc=()=>false;
                ctx.fill=()=>false;
            }

        }else{
            warning('Can not use canvas');
            return;
        }



        ctx.textBaseline = "middle";
        ctx.fillStyle = randomColor(180, 240);
        ctx.fillRect(0, 0, width, height);


        //switch type
        let txtArr;
        switch (type){
            case 'blend':
                txtArr = numbers.concat(letters);
                break;
            case 'number':
                txtArr = numbers;
                break;
            case 'letter':
                txtArr = letters;
                break;
            default:
                txtArr = letters;
        }


        //draw txt
        let newCode='';
        for(let i = 1; i <= len; i++) {
            let txt = txtArr[randomNum(0, txtArr.length)];
            newCode += txt;
            ctx.font = randomNum(height/2, height) + 'px SimHei'; //随机生成字体大小
            ctx.fillStyle = randomColor(50, 160); //随机生成字体颜色
            ctx.shadowOffsetX = randomNum(-3, 3);
            ctx.shadowOffsetY = randomNum(-3, 3);
            ctx.shadowBlur = randomNum(-3, 3);
            ctx.shadowColor = "rgba(0, 0, 0, 0.3)";


            let x = width / (len+1) * i;
            let y = height / 2;
            let deg = randomNum(-30, 30);


            //set translate deg ,origin of coordinates
            ctx.translate(x, y);
            ctx.rotate(deg * Math.PI / 180);
            ctx.fillText(txt, 0, 0);


            //reset translate deg ,origin of coordinates
            ctx.rotate(-deg * Math.PI / 180);
            ctx.translate(-x, -y);
        }


        //callback
        this.setState({
            code:newCode
        },()=>{
            onChange(newCode)
        })


        //draw line
        for(let i = 0; i < len; i++) {
            ctx.strokeStyle = randomColor(40, 180);
            ctx.beginPath();
            ctx.moveTo(randomNum(0, width), randomNum(0, height));
            ctx.lineTo(randomNum(0, width), randomNum(0, height));
            ctx.stroke();
        }


        //draw point
        for(let i = 0; i < width/len; i++) {
            ctx.fillStyle = randomColor(0, 255);
            ctx.beginPath();
            ctx.arc(randomNum(0, width), randomNum(0, height), 1, 0, 2 * Math.PI);
            ctx.fill();
        }
    }
}
