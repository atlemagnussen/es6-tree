export default [{
    id: 'master',
    name: '#',
    type: 'main',
    expanded: true,
    children: [{
        id: 'web-easy',
        expanded: true,
        type: 'folder',
        name: 'Web Easy',
        children: [{
            id: 'js-beginners',
            name: 'JS beginners',
            type: 'file'
        },
        {
            id: 'html-beginners',
            name: 'HTML beginners',
            type: 'file'
        }]
    },
    {
        id: 'web-medium',
        name: 'Web Medium',
        type: 'folder',
        children: [{
            id: 'web-components',
            name: 'Web components',
            type: 'file'
        },
        {
            id: 'css-article',
            name: 'CSS article',
            type: 'file'
        }]
    },
    {
        id: 'web-hard',
        name: 'Web Hard',
        type: 'folder',
        children: [{
            id: 'react',
            name: 'React course',
            type: 'file'
        },
        {
            id: 'angular',
            name: 'Angular course',
            type: 'file'
        }]
    }]
}];
