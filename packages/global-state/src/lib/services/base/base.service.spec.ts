import { of } from 'rxjs';
import { BaseService } from './base.service';

const mockHttpClient = {
  get: jest.fn(),
  post: jest.fn(),
  put: jest.fn(),
  patch: jest.fn(),
  delete: jest.fn(),
};

const mockResponse = { message: 'Hello World!' };
const mockHttpServiceProps = {
  endpoint: '/api/resource',
  query: { param1: 'value1', param2: 'value2' },
  body: { data: 'example' },
  options: { headers: { Authorization: 'Bearer token' } },
};

jest.mock('@angular/core', () => ({
  Injectable: jest.fn(),
}));
jest.mock('@angular/common/http', () => ({
  HttpClient: jest.fn(() => mockHttpClient),
}));
jest.mock('@maxi/shared-types', () => ({
  IHttpServiceProps: {},
}));

describe('BaseService', () => {
  let baseService: BaseService;

  beforeEach(() => {
    baseService = new BaseService(mockHttpClient as any);
    baseService.baseUrl = 'http://localhost:4200';
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should create the BaseService', () => {
    expect(baseService).toBeTruthy();
  });

  it('should call the HttpClient get method correctly', () => {
    mockHttpClient.get.mockReturnValue(of(mockResponse));

    baseService.get(mockHttpServiceProps).subscribe((response) => {
      expect(response).toEqual(mockResponse);
    });

    expect(mockHttpClient.get).toHaveBeenCalledWith(
      expect.stringContaining('/api/resource'),
      mockHttpServiceProps.options
    );
  });

  it('should call the HttpClient post method correctly', () => {
    mockHttpClient.post.mockReturnValue(of(mockResponse));

    baseService.post(mockHttpServiceProps).subscribe((response) => {
      expect(response).toEqual(mockResponse);
    });

    expect(mockHttpClient.post).toHaveBeenCalledWith(
      expect.stringContaining('/api/resource'),
      mockHttpServiceProps.body,
      mockHttpServiceProps.options
    );
  });

  it('should call HttpClient put method with correct arguments', () => {
    const mockResponse = { data: 'Updated' };
    const mockHttpServiceProps = {
      endpoint: '/api/resource/1',
      query: { param1: 'value1' },
      body: { data: 'example' },
      options: { headers: { Authorization: 'Bearer token' } },
    };

    mockHttpClient.put.mockReturnValue(of(mockResponse));

    baseService.put<any, any>(mockHttpServiceProps).subscribe((response) => {
      expect(response).toEqual(mockResponse);
    });

    expect(mockHttpClient.put).toHaveBeenCalledWith(
      expect.stringContaining('/api/resource/1'),
      mockHttpServiceProps.body,
      mockHttpServiceProps.options
    );
  });

  it('should call HttpClient patch method with correct arguments', () => {
    const mockResponse = { data: 'Patched' };
    const mockHttpServiceProps = {
      endpoint: '/api/resource/1',
      query: { param1: 'value1' },
      body: { data: 'example' },
      options: { headers: { Authorization: 'Bearer token' } },
    };

    mockHttpClient.patch.mockReturnValue(of(mockResponse));

    baseService.patch<any, any>(mockHttpServiceProps).subscribe((response) => {
      expect(response).toEqual(mockResponse);
    });

    expect(mockHttpClient.patch).toHaveBeenCalledWith(
      expect.stringContaining('/api/resource/1'),
      mockHttpServiceProps.body,
      mockHttpServiceProps.options
    );
  });

  it('should call the HttpClient delete method correctly', () => {
    mockHttpClient.delete.mockReturnValue(of(mockResponse));

    baseService.delete(mockHttpServiceProps).subscribe((response) => {
      expect(response).toEqual(mockResponse);
    });

    expect(mockHttpClient.delete).toHaveBeenCalledWith(
      expect.stringContaining('/api/resource'),
      mockHttpServiceProps.options
    );
  });

  it('should generate the correct API URL', () => {
    const endpoint = '/api/resource';
    const query = { param1: 'value1', param2: 'value2' };
    const expectedUrl =
      'http://localhost:4200/api/resource?param1=value1&param2=value2';

    const apiUrl = baseService['apiUrl'](endpoint, query);

    expect(apiUrl).toEqual(expectedUrl);
  });
});
