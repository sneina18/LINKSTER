import React from 'react'

function UserCardBlock(props) {



    const renderCartImage = (images) => {
        if(images.length > 0) {
            let image = images[0]
            return `http://localhost:5000/${image}`
        }
    }

    const renderItems = () => (
        props.project && props.projects.map(project => (
            <tr key={project._id}>
                <td>
                    <img style={{ width: '70px' }} alt="project" 
                    src={renderCartImage(project.images)} />
                </td> 
                <td>{project.description} EA</td>
                <td>$ {project.amount} </td>
                <td><button 
                onClick={()=> props.removeItem(project._id)}
                >Remove </button> </td>
            </tr>
        ))
    )


    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Project Image</th>
                        <th>Project Description</th>
                        <th>Project Amount</th>
                        <th>Remove from Cart</th>
                    </tr>
                </thead>
                <tbody>
                    {renderItems()}
                </tbody>
            </table>
        </div>
    )
}

export default UserCardBlock
