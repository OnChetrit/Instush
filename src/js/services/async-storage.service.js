export const storageService = {
    query,
    get,
    post,
    put,
    remove,
    _save,
    getByName
}

function query(entityType, delay = 400) {
    var entities = JSON.parse(localStorage.getItem(entityType)) || []

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(entities)
        }, delay)
    })
}

async function get(entityType, entityId) {
    const entities = await query(entityType)
    return entities.find(entity => entity._id === entityId)
}
async function getByName(entityType, entityUsername) {
    const entities = await query(entityType)
    return entities.find(entity => entity.username === entityUsername)
}

async function post(entityType, newEntity) {
    newEntity._id = _makeId()
    const entities = await query(entityType)
    entities.push(newEntity)
    _save(entityType, entities)
    return newEntity
}

async function put(entityType, updatedEntity) {
    const entities = query(entityType)
    const idx = entities.findIndex(entity => entity._id === updatedEntity._id)
    entities.splice(idx, 1, updatedEntity)
    _save(entityType, entities)
    return updatedEntity
}

async function remove(entityType, entityId) {
    const entities = await query(entityType)
    const idx = entities.findIndex(entity => entity._id === entityId)
    entities.splice(idx, 1)
    _save(entityType, entities)
}


function _save(entityType, entities) {
    localStorage.setItem(entityType, JSON.stringify(entities))
}

function _makeId(length = 5) {
    var text = ''
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return text
}

const userDB = [
    {
        _id: "u101",
        email: "onchetrit@example.com",
        password: "123",
        createdAt: 1635858028,
        username: "onchu",
        fullname: "On Chetrit",
        bio: "hello world",
        imgUrl: "https://robohash.org/onchu",
        isPrivate: false,
        following: [
            {
                _id: "u102",
                username: "ronchi",
                imgUrl: "https://robohash.org/ronchi"
            },
            {
                _id: "u103",
                username: "KaDaWa",
                imgUrl: "https://robohash.org/KaDaWa"
            }
        ],
        followers: [
            {
                _id: "u102",
                username: "ronchi",
                imgUrl: "https://robohash.org/ronchi"
            }
        ],
        posts: [
            'p101'
        ]
    },
    {
        _id: "u102",
        email: "ronbuchris@example.com",
        password: "123",
        createdAt: 1635858028,
        username: "ronchi",
        fullname: "Ron Buchris",
        bio: "hello world",
        imgUrl: "https://robohash.org/ronchi",
        isPrivate: false,
        following: [
            {
                _id: "u101",
                username: "onchu",
                imgUrl: "https://robohash.org/onchu"
            },
            {
                _id: "u103",
                username: "KaDaWa",
                imgUrl: "https://robohash.org/KaDaWa"
            }
        ],
        followers: [
            {
                _id: "u103",
                username: "KaDaWa",
                imgUrl: "https://robohash.org/KaDaWa"
            }
        ],
        postsIds: []
    },
    {
        _id: "u103",
        email: "adircohen@example.com",
        password: "123",
        createdAt: 1635858028,
        username: "KaDaWa",
        fullname: "Adir Cohen",
        bio: "hello world",
        imgUrl: "https://robohash.org/KaDaWa",
        isPrivate: false,
        following: [
            {
                _id: "u101",
                username: "onchu",
                imgUrl: "https://robohash.org/onchu"
            },
            {
                _id: "u102",
                username: "ronchi",
                imgUrl: "https://robohash.org/ronchi"
            }
        ],
        followers: [
            {
                _id: "u102",
                username: "ronchi",
                imgUrl: "https://robohash.org/ronchi"
            }
        ],
        posts: [
            "p102"
        ]
    }
]

const postDB = [
    {
        _id: "p101",
        txt: "My first post",
        createdAt: 1637076798514,
        createdBy: {
            _id: "u101",
            username: "onchu",
            imgUrl: "https://robohash.org/onchu"
        },
        loc: {
            lat: 11.11,
            lng: 22.22,
            name: "Tel Aviv"
        },
        uploads: [
            "https://picsum.photos/1080/1080"
        ],
        comments: [
            {
                _id: "c101",
                createdBy: {
                    _id: "u102",
                    username: "ronchi",
                    imgUrl: "https://robohash.org/ronchi"
                },
                txt: "first comment",
                likedBy: [
                    {
                        _id: "u103",
                        username: "KaDaWa",
                        imgUrl: "https://robohash.org/KaDaWa"
                    },
                    {
                        _id: "u101",
                        username: "onchu",
                        imgUrl: "https://robohash.org/onchu"
                    }
                ]
            }
        ],
        likes: [
            {
                _id: "u102",
                username: "ronchi",
                fullname: "Ron Buchris",
                imgUrl: "https://robohash.org/ronchi"
            }
        ]
    },
    {
        _id: "p103",
        txt: "Buchris post",
        createdAt: 1637116798514,
        createdBy: {
            _id: "u102",
            username: "ronchi",
            imgUrl: "https://robohash.org/ronchi"
        },
        loc: {
            lat: 11.11,
            lng: 22.22,
            name: "Tel Aviv"
        },
        uploads: [
            "https://picsum.photos/1080/1080"
        ],
        comments: [
            {
                _id: "c101",
                createdBy: {
                    _id: "u102",
                    username: "ronchi",
                    imgUrl: "https://robohash.org/ronchi"
                },
                txt: "My Post",
                likedBy: [
                    {
                        _id: "u103",
                        username: "KaDaWa",
                        imgUrl: "https://robohash.org/KaDaWa"
                    },
                    {
                        _id: "u101",
                        username: "onchu",
                        imgUrl: "https://robohash.org/onchu"
                    }
                ]
            }
        ],
        likes: [
            {
                _id: "u101",
                username: "onchu",
                fullname: "On Chetrit",
                imgUrl: "https://robohash.org/onchu"
            }
        ]
    },
    {
        _id: "p102",
        txt: "KaDaWa post",
        createdAt: 1637146298514,
        createdBy: {
            _id: "u103",
            username: "KaDaWa",
            imgUrl: "https://robohash.org/KaDaWa"
        },
        loc: {
            lat: 11.11,
            lng: 22.22,
            name: "Tel Aviv"
        },
        uploads: [
            "https://picsum.photos/1080/1080"
        ],
        comments: [
            {
                _id: "c101",
                createdBy: {
                    _id: "u102",
                    username: "ronchi",
                    imgUrl: "https://robohash.org/ronchi"
                },
                txt: "first comment",
                likedBy: [
                    {
                        _id: "u103",
                        username: "KaDaWa",
                        imgUrl: "https://robohash.org/KaDaWa"
                    },
                    {
                        _id: "u101",
                        username: "onchu",
                        imgUrl: "https://robohash.org/onchu"
                    }
                ]
            }
        ],
        likes: [
            {
                _id: "u102",
                username: "ronchi",
                fullname: "Ron Buchris",
                imgUrl: "https://robohash.org/ronchi"
            },
            {
                _id: "u101",
                username: "onchu",
                fullname: "On Chetrit",
                imgUrl: "https://robohash.org/onchu"
            }
        ]
    },
    {
        _id: "p104",
        txt: "KaDaWa second post",
        createdAt: 1637146798514,
        createdBy: {
            _id: "u103",
            username: "KaDaWa",
            imgUrl: "https://robohash.org/KaDaWa"
        },
        loc: {
            lat: 11.11,
            lng: 22.22,
            name: "Tel Aviv"
        },
        uploads: [
            "https://picsum.photos/1080/1080"
        ],
        comments: [
            {
                _id: "c101",
                createdBy: {
                    _id: "u102",
                    username: "ronchi",
                    imgUrl: "https://robohash.org/ronchi"
                },
                txt: "first comment",
                likedBy: [
                    {
                        _id: "u103",
                        username: "KaDaWa",
                        imgUrl: "https://robohash.org/KaDaWa"
                    },
                    {
                        _id: "u101",
                        username: "onchu",
                        imgUrl: "https://robohash.org/onchu"
                    }
                ]
            }
        ],
        likes: [
            {
                _id: "u102",
                username: "ronchi",
                fullname: "Ron Buchris",
                imgUrl: "https://robohash.org/ronchi"
            }
        ]
    }
]

_save('user', userDB)
_save('post', postDB)