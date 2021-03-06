import React from 'react'

import User from 'lib/models/User'

import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'

interface Props {
    user: User
}

const UserTableRow: React.FC<Props> = ({ user }) => {
    return (
        <TableRow>
            <TableCell component="th" scope="row">
                {user.id}
            </TableCell>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.username}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.fullAddress}</TableCell>
        </TableRow>
    )
}

export default React.memo(UserTableRow)
