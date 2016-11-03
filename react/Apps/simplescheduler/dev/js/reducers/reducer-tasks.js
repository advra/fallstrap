/*
 * The users reducer will always return an array of users no matter what
 * You need to return something, so if there are no users then just return an empty array
 * 
 *
 *note: this reducer contains an expandable array
 *      status can be 'pending' or 'finished'
 */

 //this function will only return an array of users
 //smaller data to be added to master object

export default function () {
    return [
        {
            id: 1,
            description: "This is a task"
        },
        {
            id: 2,
            description: "This is another task"
        },
        {
            id: 3,
            description: "This is a final task" 
        }

    ]
}
