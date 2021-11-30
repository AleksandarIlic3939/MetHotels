export class Smestaj {
    title: string;
    link: string;
    price: string;
    votes: number;

    constructor(title: string, link: string, price: string, votes?: number) {
        this.title = title;
        this.link = link;
        this.price = price;
        this.votes = votes || 0;
    }

    voteUp(): void {
        this.votes += 1;
    }

    voteDown(): void {
        this.votes -= 1;
    }

    // domain() je funkcija koja izdvaja domen iz URL-a.
    domain(): string {
        try {
            // e.g. http://foo.com/path/to/bar
            const domainAndPath: string = this.link.split('//')[1];
            // e.g. foo.com/path/to/bar
            return domainAndPath.split('/')[0];
        } catch (err) {
            return "null";
        }
    }

}
