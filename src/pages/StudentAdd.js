
const StudentAdd = {
    render: () => {
        return(
        `<div>
            <form>
                <div class="form-group">
                    <label>Tên</label>
                    <input class="form-control"/>
                </div>
                <div class="form-group">
                    <label>MSV</label>
                    <input class="form-control"/>
                </div>
                <div class="form-group">
                    <label>Avartar</label>
                    <input class="form-control"/>
                </div>
                <div class="form-group">
                    <button class="btn btn-success">Tạo mới</button>
                </div>
            </form>
        </div>`)
    },
    afterRender:() => {
        const submitBtn =document.querySelector('.btn');
        submitBtn.addEventListener('click',()=>{
            const name =document.querySelector('#name').value;
            const msv =document.querySelector('#msv').value;
            const avartar =document.querySelector('#avartar').value;

            const submitData ={
                name:name,
                msv:msv,
                avartar:avartar,
            }
        })
    }
};

export default StudentAdd;