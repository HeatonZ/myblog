export class Cred{
    constructor(
        private name,
        private singer,
        private blurPicUrl,
        private mp3url,
    ){}
}

export class Id{
    constructor(
        public number,
    ){}
}

export class MusicName{
    constructor(
        public name,
    ){}
}

export class MusicSinger{
    constructor(
        public singer,
    ){}
}

export class MusicAlbum{
    constructor(
        public album,
    ){}
}
export class Music{
    constructor(
        public name,
        public singer,
        public album,
        public id
    ){}
}