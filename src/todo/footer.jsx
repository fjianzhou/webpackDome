
import '../assets/style/footer.styl'
export default {
    data(){
        return {
            author:'MyToDo'
        }
    },
    render(){
        return <div class="footer">
            <span>Written to {this.author}</span>
        </div>
    }
}