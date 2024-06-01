import './index.css';
import ChattingHeader from "./chattingHeader";
import ChattingMessage from "./chattingMessage";
import ChattingFooter from "./chattingFooter";

export default function Chatting() {

    return(
        <div>
            <ChattingHeader/>
            <ChattingMessage roomId={"1"} isGroup={false} userNickname={'김상균'}/>
        </div>
    )
}