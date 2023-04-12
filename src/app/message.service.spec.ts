import { MessageService } from "./message.service";

describe('MessageService', () => {

    let service:MessageService

    beforeEach(() => {
        service = new MessageService();
    })
    
    it('should have no Messages to start', () => {
        expect(service.messages.length).toBe(0);
    })

})