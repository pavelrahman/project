const Validate = (regex, e) => {
    let input = e.target.value;
    if (input) {
        let valid = regex.test(input);
        if(!valid){
            e.target.style.border = '3px solid red';
            return true;
        }else{
            e.target.style.border = '1px solid #D3D3D3';
            return false;
        }
    }else{
        e.target.style.border = '1px solid #D3D3D3';
        return false;
    }
}

export default Validate;