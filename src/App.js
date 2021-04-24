import Sidebar from './components/Sidebar'
import Input from './components/Input'
import TextArea from './components/TextArea'
import { FaPhoneAlt} from "react-icons/fa";
import Lock from '@material-ui/icons/Lock';
function App() {
  return (
    <div className="App">
      <div className="left-co">
      <Sidebar />
      </div>
      <div className="right-col">
        <p className="col-title">Input</p>
        <div className="inputs">
          <div className="row row-1">
            <Input  element="<Input />" label="Label" text="" borderColor="#828282"/>
            <Input  element="&:hover" label="Label" text="" borderColor="#828282"/>
            <Input  element="&:focus" label="Label" text="" borderColor="#2962FF" color ="#2962FF"/>
          </div>
           <div className="row row-2">
            <Input  element="<Input error />" label="Label" text="" borderColor="#828282"/>
            <Input  element="&:hover" label="Label" text="" borderColor="#828282"/>
            <Input  element="&:focus" label="Label" text="" borderColor="#D32F2F" color ="#D32F2F"/>
          </div>
           <div className="row row-3">
            <Input  element="<Input disabled />" label="Label" text="" bgColor="#F2F2F2" borderColor="#F2F2F2"/>
          </div>
           <div className="row-4">
            <Input  element="<Input helperText=”Some interesting text” />" label="Label" text="Some interesting text" borderColor="#828282"/>
            <Input  element="<Input helperText=”Some interesting text” error />" label="Label" text="Some interesting text" borderColor="#D32F2F" color ="#D32F2F"/>
          </div>
           <div className="row row-5">
            <Input  element="<Input startIcon />" label="Label" text="" borderColor="#828282" iconBefore={<FaPhoneAlt style={{color:"#828282"}}/>}/>
            <Input  element="<Input endIcon />" label="Label" text="" borderColor="#828282" iconAfter={<Lock style={{color:"#828282"}}/>}/>
          </div>
           <div className="row row-6">
            <Input  element="<Input value=”text” />" value ="Text" label="Label" text="" borderColor="#828282"/>           
          </div>
           <div className="row-7">
            <Input  element="<Input fullWidth />" value ="Text" label="Label" text="" borderColor="#828282"/>           
          </div>             
           <div className="row-8">
           <TextArea element="<Input multiline row=”4” />"/>          
          </div>
          <div className="intro">
            <p>created by Abdulaziz Sadi - devChallenges.io</p>
          </div>             
        </div>    
      </div>   
    </div>
  );
}

export default App;
