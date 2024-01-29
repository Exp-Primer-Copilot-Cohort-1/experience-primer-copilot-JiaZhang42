function skillMember() {
    return {
        name: 'skillMember',
        type: 'member',
        description: 'A member of the skill',
        fields: {
            id: {
                type: 'ID',
                description: 'The id of the skill member'
            },
            name: {
                type: 'String',
                description: 'The name of the skill member'
            },
            avatar: {
                type: 'String',
                description: 'The avatar of the skill member'
            },
            description: {
                type: 'String',
                description: 'The description of the skill member'
            },
            skill: {
                type: 'skill',
                description: 'The skill of the skill member'
            }
        }
    }
}