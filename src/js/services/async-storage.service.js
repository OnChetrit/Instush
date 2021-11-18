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
    const entities = await query(entityType)
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
        imgUrl: "https://scontent.ftlv6-1.fna.fbcdn.net/v/t39.30808-6/213419480_10219845179382101_5652771782289347205_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=5KM7Pqj_hZcAX8gflDe&_nc_ht=scontent.ftlv6-1.fna&oh=5539731c0cbf309b0a0846908a8d7c00&oe=619AE643",
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
                imgUrl: "https://scontent.fsdv3-1.fna.fbcdn.net/v/t1.6435-1/s200x200/45913258_739298549766940_6051018177377206272_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=7206a8&_nc_ohc=kuHUGJHLm30AX-aCEzv&_nc_ht=scontent.fsdv3-1.fna&oh=e25dd49915bf5178de75d6bcfb0b7122&oe=61BB2D0B"
            }
        ],
        followers: [
            {
                _id: "u102",
                username: "ronchi",
                imgUrl: "https://robohash.org/ronchi"
            }
        ],
        postsIds: [
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
        imgUrl: "https://scontent.fsdv3-1.fna.fbcdn.net/v/t31.18172-1/p200x200/28701103_10215787180259649_3807430208929437705_o.jpg?_nc_cat=111&ccb=1-5&_nc_sid=7206a8&_nc_ohc=tBxmiY55_DsAX8KPgf5&_nc_ht=scontent.fsdv3-1.fna&oh=6bc7e451bb1a011ac2852447529bdb85&oe=61BADE35",
        isPrivate: false,
        following: [
            {
                _id: "u101",
                username: "onchu",
                imgUrl: "https://scontent.ftlv6-1.fna.fbcdn.net/v/t39.30808-6/213419480_10219845179382101_5652771782289347205_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=5KM7Pqj_hZcAX8gflDe&_nc_ht=scontent.ftlv6-1.fna&oh=5539731c0cbf309b0a0846908a8d7c00&oe=619AE643"
            },
            {
                _id: "u103",
                username: "KaDaWa",
                imgUrl: "https://scontent.fsdv3-1.fna.fbcdn.net/v/t1.6435-1/s200x200/45913258_739298549766940_6051018177377206272_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=7206a8&_nc_ohc=kuHUGJHLm30AX-aCEzv&_nc_ht=scontent.fsdv3-1.fna&oh=e25dd49915bf5178de75d6bcfb0b7122&oe=61BB2D0B"
            }
        ],
        followers: [
            {
                _id: "u103",
                username: "KaDaWa",
                imgUrl: "https://scontent.fsdv3-1.fna.fbcdn.net/v/t1.6435-1/s200x200/45913258_739298549766940_6051018177377206272_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=7206a8&_nc_ohc=kuHUGJHLm30AX-aCEzv&_nc_ht=scontent.fsdv3-1.fna&oh=e25dd49915bf5178de75d6bcfb0b7122&oe=61BB2D0B"
            }
        ],
        postsIds: ['p103']
    },
    {
        _id: "u103",
        email: "adircohen@example.com",
        password: "123",
        createdAt: 1635858028,
        username: "KaDaWa",
        fullname: "Adir Cohen",
        bio: "hello world",
        imgUrl: "https://scontent.fsdv3-1.fna.fbcdn.net/v/t1.6435-1/s200x200/45913258_739298549766940_6051018177377206272_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=7206a8&_nc_ohc=kuHUGJHLm30AX-aCEzv&_nc_ht=scontent.fsdv3-1.fna&oh=e25dd49915bf5178de75d6bcfb0b7122&oe=61BB2D0B",
        isPrivate: false,
        following: [
            {
                _id: "u101",
                username: "onchu",
                imgUrl: "https://scontent.ftlv6-1.fna.fbcdn.net/v/t39.30808-6/213419480_10219845179382101_5652771782289347205_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=5KM7Pqj_hZcAX8gflDe&_nc_ht=scontent.ftlv6-1.fna&oh=5539731c0cbf309b0a0846908a8d7c00&oe=619AE643"
            },
            {
                _id: "u102",
                username: "ronchi",
                imgUrl: "https://scontent.fsdv3-1.fna.fbcdn.net/v/t31.18172-1/p200x200/28701103_10215787180259649_3807430208929437705_o.jpg?_nc_cat=111&ccb=1-5&_nc_sid=7206a8&_nc_ohc=tBxmiY55_DsAX8KPgf5&_nc_ht=scontent.fsdv3-1.fna&oh=6bc7e451bb1a011ac2852447529bdb85&oe=61BADE35"
            }
        ],
        followers: [
            {
                _id: "u102",
                username: "ronchi",
                imgUrl: "https://scontent.fsdv3-1.fna.fbcdn.net/v/t31.18172-1/p200x200/28701103_10215787180259649_3807430208929437705_o.jpg?_nc_cat=111&ccb=1-5&_nc_sid=7206a8&_nc_ohc=tBxmiY55_DsAX8KPgf5&_nc_ht=scontent.fsdv3-1.fna&oh=6bc7e451bb1a011ac2852447529bdb85&oe=61BADE35"
            }
        ],
        postsIds: [
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
            imgUrl: "https://scontent.ftlv6-1.fna.fbcdn.net/v/t39.30808-6/213419480_10219845179382101_5652771782289347205_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=5KM7Pqj_hZcAX8gflDe&_nc_ht=scontent.ftlv6-1.fna&oh=5539731c0cbf309b0a0846908a8d7c00&oe=619AE643"
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
                createdAt: 1637076798514,
                createdBy: {
                    _id: "u102",
                    username: "ronchi",
                    imgUrl: "https://scontent.fsdv3-1.fna.fbcdn.net/v/t31.18172-1/p200x200/28701103_10215787180259649_3807430208929437705_o.jpg?_nc_cat=111&ccb=1-5&_nc_sid=7206a8&_nc_ohc=tBxmiY55_DsAX8KPgf5&_nc_ht=scontent.fsdv3-1.fna&oh=6bc7e451bb1a011ac2852447529bdb85&oe=61BADE35"
                },
                txt: "first comment",
                likedBy: [
                    {
                        _id: "u103",
                        username: "KaDaWa",
                        imgUrl: "https://scontent.fsdv3-1.fna.fbcdn.net/v/t1.6435-1/s200x200/45913258_739298549766940_6051018177377206272_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=7206a8&_nc_ohc=kuHUGJHLm30AX-aCEzv&_nc_ht=scontent.fsdv3-1.fna&oh=e25dd49915bf5178de75d6bcfb0b7122&oe=61BB2D0B"
                    },
                    {
                        _id: "u101",
                        username: "onchu",
                        imgUrl: "https://scontent.ftlv6-1.fna.fbcdn.net/v/t39.30808-6/213419480_10219845179382101_5652771782289347205_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=5KM7Pqj_hZcAX8gflDe&_nc_ht=scontent.ftlv6-1.fna&oh=5539731c0cbf309b0a0846908a8d7c00&oe=619AE643"
                    }
                ]
            }
        ],
        likes: [
            {
                _id: "u102",
                username: "ronchi",
                fullname: "Ron Buchris",
                imgUrl: "https://scontent.fsdv3-1.fna.fbcdn.net/v/t31.18172-1/p200x200/28701103_10215787180259649_3807430208929437705_o.jpg?_nc_cat=111&ccb=1-5&_nc_sid=7206a8&_nc_ohc=tBxmiY55_DsAX8KPgf5&_nc_ht=scontent.fsdv3-1.fna&oh=6bc7e451bb1a011ac2852447529bdb85&oe=61BADE35"
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
            imgUrl: "https://scontent.fsdv3-1.fna.fbcdn.net/v/t31.18172-1/p200x200/28701103_10215787180259649_3807430208929437705_o.jpg?_nc_cat=111&ccb=1-5&_nc_sid=7206a8&_nc_ohc=tBxmiY55_DsAX8KPgf5&_nc_ht=scontent.fsdv3-1.fna&oh=6bc7e451bb1a011ac2852447529bdb85&oe=61BADE35"
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
                createdAt: 1637076798514,
                createdBy: {
                    _id: "u102",
                    username: "ronchi",
                    imgUrl: "https://scontent.fsdv3-1.fna.fbcdn.net/v/t31.18172-1/p200x200/28701103_10215787180259649_3807430208929437705_o.jpg?_nc_cat=111&ccb=1-5&_nc_sid=7206a8&_nc_ohc=tBxmiY55_DsAX8KPgf5&_nc_ht=scontent.fsdv3-1.fna&oh=6bc7e451bb1a011ac2852447529bdb85&oe=61BADE35"
                },
                txt: "My Post",
                likedBy: [
                    {
                        _id: "u103",
                        username: "KaDaWa",
                        imgUrl: "https://scontent.fsdv3-1.fna.fbcdn.net/v/t1.6435-1/s200x200/45913258_739298549766940_6051018177377206272_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=7206a8&_nc_ohc=kuHUGJHLm30AX-aCEzv&_nc_ht=scontent.fsdv3-1.fna&oh=e25dd49915bf5178de75d6bcfb0b7122&oe=61BB2D0B"
                    },
                    {
                        _id: "u101",
                        username: "onchu",
                        imgUrl: "https://scontent.ftlv6-1.fna.fbcdn.net/v/t39.30808-6/213419480_10219845179382101_5652771782289347205_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=5KM7Pqj_hZcAX8gflDe&_nc_ht=scontent.ftlv6-1.fna&oh=5539731c0cbf309b0a0846908a8d7c00&oe=619AE643"
                    }
                ]
            }
        ],
        likes: [
            {
                _id: "u101",
                username: "onchu",
                fullname: "On Chetrit",
                imgUrl: "https://scontent.ftlv6-1.fna.fbcdn.net/v/t39.30808-6/213419480_10219845179382101_5652771782289347205_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=5KM7Pqj_hZcAX8gflDe&_nc_ht=scontent.ftlv6-1.fna&oh=5539731c0cbf309b0a0846908a8d7c00&oe=619AE643"
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
            imgUrl: "https://scontent.fsdv3-1.fna.fbcdn.net/v/t1.6435-1/s200x200/45913258_739298549766940_6051018177377206272_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=7206a8&_nc_ohc=kuHUGJHLm30AX-aCEzv&_nc_ht=scontent.fsdv3-1.fna&oh=e25dd49915bf5178de75d6bcfb0b7122&oe=61BB2D0B"
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
                createdAt: 1637076798514,
                createdBy: {
                    _id: "u102",
                    username: "ronchi",
                    imgUrl: "https://scontent.fsdv3-1.fna.fbcdn.net/v/t31.18172-1/p200x200/28701103_10215787180259649_3807430208929437705_o.jpg?_nc_cat=111&ccb=1-5&_nc_sid=7206a8&_nc_ohc=tBxmiY55_DsAX8KPgf5&_nc_ht=scontent.fsdv3-1.fna&oh=6bc7e451bb1a011ac2852447529bdb85&oe=61BADE35"
                },
                txt: "first comment",
                likedBy: [
                    {
                        _id: "u103",
                        username: "KaDaWa",
                        imgUrl: "https://scontent.fsdv3-1.fna.fbcdn.net/v/t1.6435-1/s200x200/45913258_739298549766940_6051018177377206272_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=7206a8&_nc_ohc=kuHUGJHLm30AX-aCEzv&_nc_ht=scontent.fsdv3-1.fna&oh=e25dd49915bf5178de75d6bcfb0b7122&oe=61BB2D0B"
                    },
                    {
                        _id: "u101",
                        username: "onchu",
                        imgUrl: "https://scontent.ftlv6-1.fna.fbcdn.net/v/t39.30808-6/213419480_10219845179382101_5652771782289347205_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=5KM7Pqj_hZcAX8gflDe&_nc_ht=scontent.ftlv6-1.fna&oh=5539731c0cbf309b0a0846908a8d7c00&oe=619AE643"
                    }
                ]
            }
        ],
        likes: [
            {
                _id: "u102",
                username: "ronchi",
                fullname: "Ron Buchris",
                imgUrl: "https://scontent.fsdv3-1.fna.fbcdn.net/v/t31.18172-1/p200x200/28701103_10215787180259649_3807430208929437705_o.jpg?_nc_cat=111&ccb=1-5&_nc_sid=7206a8&_nc_ohc=tBxmiY55_DsAX8KPgf5&_nc_ht=scontent.fsdv3-1.fna&oh=6bc7e451bb1a011ac2852447529bdb85&oe=61BADE35"
            },
            {
                _id: "u101",
                username: "onchu",
                fullname: "On Chetrit",
                imgUrl: "https://scontent.ftlv6-1.fna.fbcdn.net/v/t39.30808-6/213419480_10219845179382101_5652771782289347205_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=5KM7Pqj_hZcAX8gflDe&_nc_ht=scontent.ftlv6-1.fna&oh=5539731c0cbf309b0a0846908a8d7c00&oe=619AE643"
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
            imgUrl: "https://scontent.fsdv3-1.fna.fbcdn.net/v/t1.6435-1/s200x200/45913258_739298549766940_6051018177377206272_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=7206a8&_nc_ohc=kuHUGJHLm30AX-aCEzv&_nc_ht=scontent.fsdv3-1.fna&oh=e25dd49915bf5178de75d6bcfb0b7122&oe=61BB2D0B"
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
                createdAt: 1637076798514,
                createdBy: {
                    _id: "u102",
                    username: "ronchi",
                    imgUrl: "https://scontent.fsdv3-1.fna.fbcdn.net/v/t31.18172-1/p200x200/28701103_10215787180259649_3807430208929437705_o.jpg?_nc_cat=111&ccb=1-5&_nc_sid=7206a8&_nc_ohc=tBxmiY55_DsAX8KPgf5&_nc_ht=scontent.fsdv3-1.fna&oh=6bc7e451bb1a011ac2852447529bdb85&oe=61BADE35"
                },
                txt: "first comment",
                likedBy: [
                    {
                        _id: "u103",
                        username: "KaDaWa",
                        imgUrl: "https://scontent.fsdv3-1.fna.fbcdn.net/v/t1.6435-1/s200x200/45913258_739298549766940_6051018177377206272_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=7206a8&_nc_ohc=kuHUGJHLm30AX-aCEzv&_nc_ht=scontent.fsdv3-1.fna&oh=e25dd49915bf5178de75d6bcfb0b7122&oe=61BB2D0B"
                    },
                    {
                        _id: "u101",
                        username: "onchu",
                        imgUrl: "https://scontent.ftlv6-1.fna.fbcdn.net/v/t39.30808-6/213419480_10219845179382101_5652771782289347205_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=5KM7Pqj_hZcAX8gflDe&_nc_ht=scontent.ftlv6-1.fna&oh=5539731c0cbf309b0a0846908a8d7c00&oe=619AE643"
                    }
                ]
            }
        ],
        likes: [
            {
                _id: "u102",
                username: "ronchi",
                fullname: "Ron Buchris",
                imgUrl: "https://scontent.fsdv3-1.fna.fbcdn.net/v/t31.18172-1/p200x200/28701103_10215787180259649_3807430208929437705_o.jpg?_nc_cat=111&ccb=1-5&_nc_sid=7206a8&_nc_ohc=tBxmiY55_DsAX8KPgf5&_nc_ht=scontent.fsdv3-1.fna&oh=6bc7e451bb1a011ac2852447529bdb85&oe=61BADE35"
            }
        ]
    }
]

// _save('user', userDB)
// _save('post', postDB)