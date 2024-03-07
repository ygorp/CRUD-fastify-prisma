import { ContactsRepositoryPrisma } from "../repositories/contacts.repository";
import { ContactCreate, ContactRepository } from "../interfaces/contacts.interface";
import { UserRepositoryPrisma } from "../repositories/user.repository";
import { UserRepository } from "../interfaces/user.interface";

class ContactUsecase {
    private contactRepository: ContactRepository;
    private userRepository: UserRepository;
    constructor() {
        this.contactRepository = new ContactsRepositoryPrisma();
        this.userRepository = new UserRepositoryPrisma();
    }
    async create({ name, email, phone, userEmail }: ContactCreate) {
        const user = await this.userRepository.findByEmail(userEmail);

        if (!user) {
            throw new Error('User not found');
        }

        const verifyIfExistsContact = await this.contactRepository.findByEmail(email);
    }
}

export { ContactUsecase };