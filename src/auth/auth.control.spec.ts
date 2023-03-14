import { JwtService } from "@nestjs/jwt";
import { Test, TestingModule } from "@nestjs/testing";
import { AppModule } from "src/app.module";
import { AuthService } from "src/auth/auth.service";
import { User, UsersService } from "src/users/users.service";

describe('CatsController', () => {
    let catsController: CatsController;
    let catsService: CatsService;
  
    beforeEach(() => {
      catsService = new CatsService();
      catsController = new CatsController(catsService);
    });


describe('AuthService', () => {

    let authService: AuthService

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [AuthService],
            imports: [AppModule],
        }).compile();

        authService = module.get<AuthService>(AuthService)
    });



    it('AuthService - should be defined', () => {
        expect(authService).toBeDefined();
    })


    test('correct username and password', async () => {

        
        const usersService = {
            findOne: async (username: string) => {
                if (username === 'Gabor'){
                    return {
                        id: 'u1',
                        username: 'Gabor',
                        password: 'password',
                 } as User
                } else {
                    return null
                }
            }
        };

        const authService = new AuthService(usersService as UsersService, null);

        const user = await authService.validateUser('Gabor', 'password')


        expect(user).toEqual({
            id: 'u1',
            username: 'Gabor',
            password: 'password',
            profile: {
                points: 4
            }
        });
    });

    test('existing username and incorrect password', async () => {
        const usersService = new UsersService;
        const authService = new AuthService(usersService, null)

        const user = await authService.validateUser('Gabor', 'password123')
        expect(user).toBeNull;
    })
});