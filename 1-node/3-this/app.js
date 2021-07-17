function hello() {
    console.log(this)
    console.log(this==global)
}

hello()