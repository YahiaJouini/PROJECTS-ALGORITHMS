
const Login = () => {
    return (
        <div className="w-[40%] shadow-xl bg-white p-10 rounded-lg ">

            <form className="w-[70%] m-auto">

                <h3 className="mb-6 font-medium">Login in</h3>

                <div className="flex flex-col gap-2 mb-4">

                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" />

                </div>

                <div className="flex flex-col gap-2 mb-4">

                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" />

                </div>
                <button type="submit" className="w-full mt-6 ">Login</button>
            </form>

        </div>

    )
}

export default Login