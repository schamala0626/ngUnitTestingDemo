import { COMPILER_OPTIONS, Component } from "@angular/core";
import { HeroesComponent } from "./heroes.component";
import { of } from "rxjs/internal/observable/of";

describe ('HeroesComponent', () => {
    let component:  HeroesComponent;
    let HEROES;
    let mockHeroService;

    beforeEach(() => {
        HEROES = [
            {id:1, name: 'Eva', streght: 8},
            {id:2, name: 'Kaju', streght: 25},
            {id:3, name: 'Tommy', streght: 50},
        ]
    
        mockHeroService = jasmine.createSpyObj(['getHeroes', 'addHero', 'deleteHero'])

        component = new HeroesComponent(mockHeroService);
        
    })

    describe('delete', () => {
        it('Should remove hero from the HEROES list', () => {
            mockHeroService.deleteHero.and.returnValue(of(true));
            component.heroes = HEROES;

            component.delete(HEROES[2]);          
            expect(component.heroes.length).toBe(2);

        })

        it('Should call deleteHero', () => {
            mockHeroService.deleteHero.and.returnValue(of(true));
            component.heroes = HEROES;
            
            component.delete(HEROES[2]);
        })
    })

})