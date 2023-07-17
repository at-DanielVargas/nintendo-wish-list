import { TestBed } from '@angular/core/testing';
import { GamesService } from './games.service';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

const mockHttpClient = {
  get: jest.fn(),
};

describe('GamesService', () => {
  let service: GamesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        GamesService,
        { provide: HttpClient, useValue: mockHttpClient },
      ],
    });

    service = TestBed.inject(GamesService);
    service.baseUrl = 'http://localhost:4200';
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call HttpClient get method with correct arguments for getGames', () => {
    const mockResponse = { games: [{ id: 1, name: 'Game 1' }] };
    const mockQuery = { platform: 'PS4' };

    mockHttpClient.get.mockReturnValue(of(mockResponse));

    service.getGames(mockQuery).subscribe((response) => {
      expect(response).toEqual(mockResponse);
    });

    expect(mockHttpClient.get).toHaveBeenCalledWith(
      expect.stringContaining('/games?platform=PS4'),
      undefined
    );
  });

  it('should call HttpClient get method with correct arguments for getGameById', () => {
    const gameId = 1;
    const mockResponse = { id: 1, name: 'Game 1' };

    mockHttpClient.get.mockReturnValue(of(mockResponse));

    service.getGameById(gameId).subscribe((response) => {
      expect(response).toEqual(mockResponse);
    });

    expect(mockHttpClient.get).toHaveBeenCalledWith(
      expect.stringContaining(`/games/${gameId}`),
      undefined
    );
  });
});
